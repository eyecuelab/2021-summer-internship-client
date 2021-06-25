import { select } from "redux-saga/effects";
export function* makeRequest(url: string, method: string, data?: unknown): any {
  const token: string = yield select(state => state.auth.token);
  const init: RequestInit = {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
  };
  try {
    const response = yield fetch(url, init);
    if (!response.ok) {
      // an error
      console.error(response);
      return { success: false, data: null, error: response };
    }
    const data = yield response.json();
    return { success: true, data, error: null };
  } catch (e) {
    console.error(e);
    return { success: false, data: null, error: e };
  }
}