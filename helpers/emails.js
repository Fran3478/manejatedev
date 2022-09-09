import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    const { email, nombre, token } = datos

    await transport.sendMail({
        from: 'Manejate',
        to: email,
        subject: 'Confirma tu Cuenta en Manejate',
        text: 'Confirma tu Cuenta en Manejate' ,
        html:`
        <p>Hola ${nombre}, comprueba tu cuenta en Manejate</p>
        <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar Cuenta</a> </p>
        <p>Si no creaste una cuenta en Manejate, puedes ignorar este correo</p>`
    })
}

const emailOlvidePassword = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    const { email, nombre, token } = datos

    await transport.sendMail({
        from: 'Manejate',
        to: email,
        subject: 'Restablece tu Contraseña en Manejate',
        text: 'Restablece tu Contraseña en Manejate' ,
        html:`
        <p>Hola ${nombre}, has solicitado reestablecer tu contraseña en Manejate</p>
        <p>Sigue el siguiente enlace para generar una contraseña nueva:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}">Reestablecer Contraseña</a> </p>
        <p>Si no solicitaste el cambio de contraseña, puedes ignorar este correo</p>`
    })
}

export {
    emailRegistro,
    emailOlvidePassword
}