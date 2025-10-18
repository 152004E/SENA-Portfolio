package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.mail.*;
import jakarta.mail.internet.*;


import java.util.List;
import java.util.Properties;

import com.example.demo.model.usuario;

@Controller
public class FormController {

    @GetMapping("/")
    public String mostrarFormulario() {
        return "form"; 
    }

    @PostMapping("/mensaje")
    public String procesarFormulario(@RequestParam String nombre,
                                        @RequestParam String correo,
                                        @RequestParam String telefono,
                                        Model model) {
        
        String envio = null;
    
        usuario persona = new usuario();
        String res = persona.Registrar(nombre,correo,telefono);
    
        if(res == "1"){        
            String remitente = ""; // Cuenta de correo Gmail
            String password = ""; // Contraseña de aplicaciones 

            // Configuración del servidor SMTP de Gmail
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");

            // Crear la sesión
            Session session = Session.getInstance(props, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(remitente, password);
                }
            });

            try {
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(remitente));
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(correo));
                message.setSubject("Asunto del mensaje");
                message.setText("Contenido del mensaje");

                // Enviar el mensaje
                Transport.send(message);
                envio = "Correo enviado correctamente";
            } 
            catch (MessagingException e) {
                envio = "Registro correcto sin envío de notificación";
            }
        }
        else{
            envio = "Error de registro, servidor fuera de línea, intente más tarde";
        }
            
            model.addAttribute("nombre", nombre);
            model.addAttribute("correo", correo);
            model.addAttribute("telefono", telefono);
            model.addAttribute("respuesta", res);
            model.addAttribute("envio", envio);

            return "resultado";
    }   

    @GetMapping("/usuarios")
        public String listarUsuarios(Model model) {
            usuario persona = new usuario();
            List<String[]> lista = persona.ConsultaGeneral(); 
            model.addAttribute("usuarios", lista);
            return "usuariosGeneral"; 
    }
}