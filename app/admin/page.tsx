import { adminUser } from '../../lib/cms';
import Dashboard from './dashboard';

export const dynamic = 'force-dynamic';

type Props = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function Admin({ searchParams }: Props) {
  const user = await adminUser();

  if (user) {
    return <Dashboard email={user.email} />;
  }

  const params = searchParams ? await searchParams : {};
  const hasError = params.error === '1';

  return (
    <main className="login">
      <div className="login-card">
        <span className="brand-tag">FORD MỸ ĐÌNH</span>

        <h1>Quản trị website</h1>

        <p>
          Đăng nhập bằng tài khoản quản trị để quản lý nội dung
          và yêu cầu tư vấn.
        </p>

        {hasError && (
          <div
            role="alert"
            style={{
              marginBottom: 16,
              padding: 12,
              borderRadius: 8,
              background: '#fff1f1',
              color: '#b42318',
            }}
          >
            Email hoặc mật khẩu không chính xác.
          </div>
        )}

        <form action="/api/admin-login" method="POST">
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              placeholder="Email quản trị"
            />
          </label>

          <label>
            Mật khẩu
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              placeholder="Mật khẩu"
            />
          </label>

          <button className="primary" type="submit">
            Đăng nhập
          </button>
        </form>

        <a href="/">Quay về website</a>
      </div>
    </main>
  );
}