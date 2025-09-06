import { netConfig } from "db://assets/Framework/net/custom/NetConfig";

// 保存Token到本地存储
export function setToken(token: string) {
    localStorage.setItem('userToken', token);
}

// 获取Token
export function getToken(): string | null {
    return localStorage.getItem('userToken');
}

// 获取设备ID
export function getDeviceId(): string {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        // 生成简单的设备ID
        deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

// 验证Token
export async function verifyToken(): Promise<boolean> {
    const token = getToken();
    if (!token) return false;

    try {
        const response = await httpRequest('POST', '/api/auth/verify-token', { token });
        return response.success;
    } catch (error) {
        console.error('Token验证失败:', error);
        return false;
    }
}

export async function httpRequest(method: string, url: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const fullUrl = `${netConfig.httpServer}${url}`;

        xhr.open(method, fullUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // 如果有token，添加到请求头
        const token = getToken();
        if (token) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(new Error('解析响应失败'));
                    }
                } else {
                    // 增强错误信息，包含响应内容
                    let errorMessage = `HTTP错误: ${xhr.status}`;
                    try {
                        const errorResponse = JSON.parse(xhr.responseText);
                        if (errorResponse.message) {
                            errorMessage += ` - ${errorResponse.message}`;
                        }
                        if (errorResponse.errors) {
                            errorMessage += ` - 详细错误: ${JSON.stringify(errorResponse.errors)}`;
                        }
                        console.error('服务器错误响应:', errorResponse);
                    } catch (e) {
                        console.error('原始错误响应:', xhr.responseText);
                    }
                    reject(new Error(errorMessage));
                }
            }
        };

        xhr.onerror = () => {
            reject(new Error('网络请求失败'));
        };

        // 添加请求日志
        console.log(`发送 ${method} 请求到: ${fullUrl}`);
        if (data) {
            console.log('请求数据:', JSON.stringify(data, null, 2));
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}

// 验证注册数据
export function validateRegisterData(username: string, email: string, password: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!username || username.trim().length < 3) {
        errors.push('用户名至少需要3个字符');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('邮箱格式不正确');
    }

    if (!password || password.length < 6) {
        errors.push('密码至少需要6个字符');
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

// 验证登录数据
export function validateLoginData(username: string, password: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!username || username.trim().length === 0) {
        errors.push('用户名不能为空');
    }

    if (!password || password.length === 0) {
        errors.push('密码不能为空');
    }

    return {
        valid: errors.length === 0,
        errors
    };
}