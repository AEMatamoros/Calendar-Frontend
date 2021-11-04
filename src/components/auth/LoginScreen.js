import React from 'react';
import './login.css';
import { useForm } from '../helpers/UseForm'
import { useDispatch } from 'react-redux';
import { startLogin,startRegister} from '../../actions/auth';
import Swal from 'sweetalert2';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm( {
        lEmail:'email@gmail.com',
        lPassword:'12345678'
    } );

    const {lEmail,lPassword} = formLoginValues; 

    const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
        rFirst_name:'Alexis',
        rLast_name:'Matamoros',
        rEmail:'email@gmail.com',
        rPassword:'12345678',
        rPassword2:'12345678'
    } );

    const { rFirst_name, rLast_name, rEmail, rPassword, rPassword2 } = formRegisterValues; 

    const handleLogin = (e)=>{

        e.preventDefault();
        
        dispatch(startLogin(lEmail,lPassword));

    }

    const handleRegister = (e)=>{

        e.preventDefault();
    
        if(rPassword!==rPassword2){
            Swal.fire('Error','Las contraseñas no coinciden','error');
        }else{
            dispatch(startRegister(rFirst_name,rLast_name,rEmail,rPassword));
        }

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value = {lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value = {lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name = 'rFirst_name'
                                value = {rFirst_name}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name = 'rLast_name'
                                value = {rLast_name}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name = 'rEmail'
                                value = {rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name = 'rPassword'
                                value = {rPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name ='rPassword2'
                                value = {rPassword2}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}