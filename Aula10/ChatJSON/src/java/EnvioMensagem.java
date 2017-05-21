/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Elton
 */
public class EnvioMensagem extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        if (request.getMethod().equalsIgnoreCase("get")) {
            if (request.getParameter("conversa") != null
                    && request.getParameter("texto") != null) {
                String conversa = request.getParameter("conversa");
                String texto = request.getParameter("texto");
                Usuario usuario = (Usuario) request.getSession()
                        .getAttribute("eu");
                
                String j = this.json(conversa, texto, usuario.getUsername());
                
                response.setContentType("text/json;charset=UTF-8");
                try (PrintWriter out = response.getWriter()) {
                    out.print("[");
                    out.print(j);
                    out.print("]");
                }                
            }
        }
    }
    
    private String json(String conversa, String texto, String usuario) {
        String json = "{";
        json += "\"conversa\":\""+conversa+"\", ";
        json += "\"usuario\":\""+usuario+"\", ";
        json += "\"texto\":\""+texto+"\"";
        json += "}";
        
        return json;
    }
}
