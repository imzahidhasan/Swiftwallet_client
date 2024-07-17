import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../hooks/useAxios';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const userInfo = {
            email: e.target.email.value,
            pin: e.target.pin.value
        }
        const res = await api.post('/checkUser', userInfo)
        if (res.data.notFound) {
            Swal.fire({
                icon: 'warning',
                title: 'User is not Found',
                text: 'there is not user with this email or phone number!'
            })
            return
        }

        if (res.data._id) {
            console.log(res.data);
            Swal.fire({
                icon: 'success',
                title: 'SUCCESSFUL',
                text: 'logged in to your account successfully!'
            })
            localStorage.setItem('token', res.data.token)
            navigate('/dashboard')
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email/phone</label>
                    <input
                        name='email'
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="enter your email/phone"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your pin</label>
                    <input
                        name='pin'
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required placeholder='enter your pin code'
                    />
                </div>

                <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <div className='p-2 '>
                    <p>Don't have account?
                        <Link className='font-medium text-blue-600 hover:underline dark:text-blue-500' to={'/register'}>
                            Register here
                        </Link>
                    </p>
                </div>
            </form>

        </div>
    );
}

export default Login;
