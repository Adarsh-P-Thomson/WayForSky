import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
	const location = useLocation();
	const initialMode = location.pathname.endsWith('/signup') ? 'signup' : 'login';
	const [mode, setMode] = useState(initialMode);
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
		remember: true,
		terms: true,
	});
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');

	// Keep mode in sync with URL
	useEffect(() => {
		const next = location.pathname.endsWith('/signup') ? 'signup' : 'login';
		setMode(next);
	}, [location.pathname]);

	// Ensure icons are available (Font Awesome)
	useEffect(() => {
		if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"]')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
			document.head.appendChild(link);
		}
	}, []);

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setMessage('');
		if (mode === 'login') {
				if (!form.email || !form.password) {
					setError('Please enter your email and password.');
					return;
				}
			} else {
				// signup validation
				if (!form.name || !form.email || !form.password || !form.confirm) {
					setError('Please fill all required fields.');
					return;
				}
				if (form.password.length < 6) {
					setError('Password must be at least 6 characters.');
					return;
				}
				if (form.password !== form.confirm) {
					setError('Passwords do not match.');
					return;
				}
				if (!form.terms) {
					setError('Please accept the terms to continue.');
					return;
				}
			}
		try {
			setLoading(true);
			// Simulate auth call. Replace with your real API.
			await new Promise((r) => setTimeout(r, 900));
			setMessage(mode === 'login' ? 'Logged in successfully.' : 'Account created successfully.');
		} catch (err) {
			setError(mode === 'login' ? 'Unable to log in. Please try again.' : 'Unable to sign up. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<style>{`
				:root {
					--blue-50: #eff6ff;
					--blue-100: #dbeafe;
					--blue-200: #bfdbfe;
					--blue-500: #3b82f6;
					--blue-600: #2563eb;
					--slate-700: #334155;
					--slate-600: #475569;
					--slate-500: #64748b;
					--white: #ffffff;
				}
				.login-page {
					min-height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
					background: linear-gradient(180deg, var(--blue-50) 0%, #f3f8ff 60%, #ffffff 100%);
					padding: 1.5rem;
				}
				.login-card {
					width: 100%;
					max-width: 920px;
					display: grid;
					grid-template-columns: 1fr;
					background: var(--white);
					border: 1px solid var(--blue-100);
					border-radius: 20px;
					box-shadow: 0 10px 40px rgba(59, 130, 246, 0.12);
					overflow: hidden;
				}
				@media (min-width: 960px) {
					.login-card { grid-template-columns: 1.1fr 1fr; }
				}
				.brand-side {
					background: radial-gradient(1200px 300px at -10% -10%, var(--blue-100), transparent),
											radial-gradient(900px 300px at 110% 110%, var(--blue-200), transparent),
											linear-gradient(135deg, #eaf4ff, #f7fbff);
					padding: 2.25rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 1.25rem;
				}
				.brand-kicker {
					color: var(--blue-600);
					font-weight: 700;
					letter-spacing: .08em;
					font-size: .825rem;
					text-transform: uppercase;
				}
				.brand-title {
					color: var(--slate-700);
					font-weight: 800;
					line-height: 1.2;
					font-size: clamp(1.6rem, 2.5vw, 2rem);
					margin: 0;
				}
				.brand-points { display: grid; gap: .65rem; }
				.point { display: flex; align-items: center; gap: .6rem; color: var(--slate-600); font-weight: 600; }
				.point i { color: var(--blue-600); }

				.form-side { padding: 2.25rem; }
				@media (min-width: 960px) { .form-side { padding: 3rem; } }
				.form-header { text-align: center; margin-bottom: 1.25rem; }
				.title { margin: 0; color: var(--slate-700); font-weight: 800; font-size: 1.6rem; }
				.subtitle { color: var(--slate-500); margin-top: .35rem; }

				.auth-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; background: var(--blue-50); border: 1px solid var(--blue-100); border-radius: 12px; padding: .35rem; margin: 0 auto 1rem; max-width: 380px; }
				.auth-tab { border: none; background: transparent; padding: .6rem 1rem; border-radius: 10px; font-weight: 800; color: var(--slate-600); cursor: pointer; }
				.auth-tab.active { background: #fff; color: var(--blue-600); box-shadow: 0 2px 10px rgba(59,130,246,.12); }

				.alert { border-radius: 12px; padding: .75rem .9rem; margin: .75rem 0; font-weight: 600; font-size: .925rem; }
				.alert-error { background: #fee2e2; border: 1px solid #fecaca; color: #b91c1c; }
				.alert-success { background: #dcfce7; border: 1px solid #bbf7d0; color: #166534; }

				.form { display: grid; gap: 1rem; margin-top: .25rem; }
				.field { display: grid; gap: .5rem; }
				.label { font-weight: 700; color: var(--slate-700); font-size: .925rem; }
				.control { position: relative; }
				.input {
					width: 100%;
					background: #fff;
					border: 2px solid var(--blue-100);
					border-radius: 12px;
					padding: 1rem 1.1rem;
					font-size: 1rem;
					color: var(--slate-700);
					transition: box-shadow .2s ease, border-color .2s ease;
				}
				.input::placeholder { color: #94a3b8; }
				.input:focus { outline: none; border-color: var(--blue-500); box-shadow: 0 0 0 4px rgba(59,130,246,.15); }
				.toggle-btn {
					position: absolute; right: .6rem; top: 50%; transform: translateY(-50%);
					border: none; background: transparent; color: var(--slate-500); cursor: pointer; padding: .25rem .4rem;
				}
				.row { display: flex; align-items: center; justify-content: space-between; gap: .75rem; flex-wrap: wrap; }
				.checkbox { display: inline-flex; align-items: center; gap: .55rem; color: var(--slate-600); }
				.checkbox input { accent-color: var(--blue-600); }
				.link { color: var(--blue-600); text-decoration: none; font-weight: 700; }
				.link:hover { text-decoration: underline; }

				.btn-primary {
					width: 100%;
					background: linear-gradient(135deg, var(--blue-500), var(--blue-600));
					border: none; color: #fff; border-radius: 12px; padding: .9rem 1rem; font-weight: 800; font-size: 1rem;
					box-shadow: 0 8px 24px rgba(37, 99, 235, .25);
					cursor: pointer; transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
				}
				.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 12px 30px rgba(37,99,235,.3); filter: brightness(1.03); }
				.btn-primary:disabled { opacity: .7; cursor: not-allowed; transform: none; box-shadow: none; }

				.or { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: .75rem; color: #94a3b8; margin: .5rem 0; }
				.or::before, .or::after { content: ''; height: 1px; background: var(--blue-100); }

				.socials { display: grid; gap: .75rem; grid-template-columns: 1fr; }
				@media (min-width: 480px) { .socials { grid-template-columns: 1fr 1fr; } }
				.btn-ghost { border: 2px solid var(--blue-100); background: #fff; border-radius: 12px; padding: .7rem .9rem; font-weight: 700; color: var(--slate-700); cursor: pointer; }
				.btn-ghost:hover { border-color: var(--blue-500); box-shadow: 0 4px 14px rgba(59,130,246,.15); }

				.footer-note { margin-top: 1rem; text-align: center; color: var(--slate-600); }
			`}</style>

			<div className="login-page">
				<div className="login-card">
					<aside className="brand-side">
						<span className="brand-kicker">WayForSky</span>
						<h2 className="brand-title">Welcome back to your pilot journey</h2>
						<div className="brand-points">
							<div className="point"><i className="fas fa-shield-alt"></i><span>Secure account access</span></div>
							<div className="point"><i className="fas fa-plane-departure"></i><span>Track your training progress</span></div>
							<div className="point"><i className="fas fa-calendar-check"></i><span>Manage enrollments and sessions</span></div>
						</div>
					</aside>

					<section className="form-side">
						<div className="form-header">
							<div className="auth-tabs" role="tablist">
								<button type="button" className={`auth-tab ${mode === 'login' ? 'active' : ''}`} role="tab" aria-selected={mode==='login'} onClick={() => setMode('login')}>
									Log in
								</button>
								<button type="button" className={`auth-tab ${mode === 'signup' ? 'active' : ''}`} role="tab" aria-selected={mode==='signup'} onClick={() => setMode('signup')}>
									Sign up
								</button>
							</div>
							<h1 className="title">{mode === 'login' ? 'Log in' : 'Create your account'}</h1>
							<p className="subtitle">{mode === 'login' ? 'Use your email and password to continue.' : 'Sign up with your details to get started.'}</p>
						</div>

						{error && <div className="alert alert-error">{error}</div>}
						{message && <div className="alert alert-success">{message}</div>}

						<form className="form" onSubmit={onSubmit}>
							{mode === 'signup' && (
								<div className="field">
									<label htmlFor="name" className="label">Full name</label>
									<div className="control">
										<input id="name" name="name" type="text" className="input" placeholder="Your full name" value={form.name} onChange={onChange} required />
									</div>
								</div>
							)}
							<div className="field">
								<label htmlFor="email" className="label">Email</label>
								<div className="control">
									<input id="email" name="email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={onChange} required />
								</div>
							</div>

							<div className="field">
								<label htmlFor="password" className="label">Password</label>
								<div className="control">
									<input id="password" name="password" type={showPassword ? 'text' : 'password'} className="input" placeholder="Your password" value={form.password} onChange={onChange} required />
									<button type="button" className="toggle-btn" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((s) => !s)}>
										{showPassword ? 'Hide' : 'Show'}
									</button>
								</div>
							</div>

							{mode === 'signup' && (
								<div className="field">
									<label htmlFor="confirm" className="label">Confirm password</label>
									<div className="control">
										<input id="confirm" name="confirm" type={showPassword ? 'text' : 'password'} className="input" placeholder="Re-enter your password" value={form.confirm} onChange={onChange} required />
									</div>
								</div>
							)}

							{mode === 'login' ? (
								<div className="row">
									<label className="checkbox">
										<input type="checkbox" name="remember" checked={form.remember} onChange={onChange} />
										Remember me
									</label>
									<a className="link" href="#">Forgot password?</a>
								</div>
							) : (
								<label className="checkbox" style={{marginTop: 4}}>
									<input type="checkbox" name="terms" checked={form.terms} onChange={onChange} />
									I agree to the <a className="link" href="#">Terms</a> and <a className="link" href="#">Privacy Policy</a>
								</label>
							)}

							<button className="btn-primary" type="submit" disabled={loading}>{loading ? (mode === 'login' ? 'Signing in…' : 'Creating…') : (mode === 'login' ? 'Sign in' : 'Create account')}</button>

							<div className="or">Or continue with</div>
							<div className="socials">
								<button type="button" className="btn-ghost"><i className="fab fa-google" style={{marginRight: 8}}></i>Google</button>
								<button type="button" className="btn-ghost"><i className="fab fa-linkedin" style={{marginRight: 8}}></i>LinkedIn</button>
							</div>
						</form>

						{mode === 'login' ? (
							<p className="footer-note">Don’t have an account? <Link className="link" to="/signup">Sign up</Link></p>
						) : (
							<p className="footer-note">Already have an account? <Link className="link" to="/login">Log in</Link></p>
						)}
					</section>
				</div>
			</div>
		</>
	);
};

export default Login;

