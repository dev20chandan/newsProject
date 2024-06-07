import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/users/actions';
import * as yup from 'yup';
import { validateForm } from '../Comman/helper';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/authSlice';
import _ from 'lodash'

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [apiErrors, setApiErrors] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const incorrectAttempts = useRef(0);
    const { user } = useSelector((state) => state?.getUserDetails)

    useEffect(() => {
        if (!_.isEmpty(user)) {
            navigate('/Feed')
        }
    }, [])

    useEffect(() => {

        const storedEmail = localStorage.getItem('rememberMeEmail');
        const storedPassword = localStorage.getItem('rememberMePassword');
        const storedRememberMe = localStorage.getItem('rememberMe') === 'true';
        if (storedRememberMe) {
            setFormData({
                email: storedEmail || '',
                password: storedPassword || '',
            });
            setRememberMe(storedRememberMe);
        }
    }, []);

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(3, 'Password must be at least 4 characters long').required('Password is required'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors((pro) => ({ ...pro, [name]: '' }));
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const validationResult = await validateForm(formData, schema);
        if (validationResult.isValid) {
            const validData = await dispatch(loginUser(formData));
            if ((validData.payload.code === 400) || (validData.payload.code === 404) || (validData.meta.rejectedWithValue == true)) {
                incorrectAttempts.current += 1;
                let msg = validData.meta.rejectedWithValue ? validData.payload : validData.payload.message
                return setApiErrors({ msg: msg });
            } else {
                console.log('Form is valid. Submitting...');
                setApiErrors({});
                setErrors({});
                if (rememberMe) {
                    localStorage.setItem('rememberMeEmail', formData.email);
                    localStorage.setItem('rememberMePassword', formData.password);
                    localStorage.setItem('rememberMe', true);
                } else {
                    localStorage.removeItem('rememberMeEmail');
                    localStorage.removeItem('rememberMePassword');
                    localStorage.removeItem('rememberMe');
                }
                navigate('/Feed');
            }
        } else {
            setErrors(validationResult.errors);
        }
    };

    return (
        <section className="vh-100 login_page" >

            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-7 d-none d-md-block">
                                    <img
                                        src="assets/images/logonews.jpg"
                                        alt="login form"
                                        className="img-fluid h-100 object-fit-cover"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        {/* <form action="advertising-management.html"></form> */}
                                        <form className="loginForm">
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                {/* <img src="assets/images/logo.png" width={200} alt="" /> */}
                                                <h4 > News Analysis </h4>
                                            </div>
                                            <h5
                                                className="fw-normal mb-3 pb-3"
                                                style={{ letterSpacing: 1 }}
                                            >
                                                Admin Sign
                                            </h5>
                                            {apiErrors?.msg && <span className="error-message ">{apiErrors?.msg}</span>}
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    name='email'
                                                    value={formData.email}
                                                    className="form-control form-control-lg"
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <span className="error-message ">{errors.email}</span>}
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name='password'
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                />
                                                {errors.password && <span className="error-message" >{errors.password}</span>}

                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type='checkbox' className="form-check-input" checked={rememberMe} onClick={handleRememberMeChange} />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="pt-1 mb-3 w-100">
                                                <a

                                                    className="btn btn-dark w-100"
                                                    style={{
                                                        backgroundColor: "var(--theme)",
                                                        borderColor: "var(--theme)"
                                                    }}
                                                    onClick={HandleSubmit}
                                                >
                                                    {" "}
                                                    Login
                                                </a>
                                                {incorrectAttempts.current > 0 && (
                                                    < span className="error-message" > Incorrect attempts: {incorrectAttempts.current}</span>
                                                )}
                                                {/* <button class="btn btn-dark w-100"
                  style="background-color: var(--theme); border-color: var(--theme);"  onclick="submitData()"
                 >Login</button> */}
                                            </div>
                                            {/* <a class="small text-muted text-decoration-none" href="forgot.html">Forgot password?</a>
              <p class="mb-3 pb-lg-2" style="color: #393f81;">Don't have an account? <a
                  class="text-decoration-none" href="register.html" style="color: #393f81;">Register here</a></p> */}
                                            <a href="javascript:void(0)" className="small text-muted">
                                                Terms of use.
                                            </a>
                                            <a href="javascript:void(0)" className="small text-muted">
                                                Privacy policy
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
