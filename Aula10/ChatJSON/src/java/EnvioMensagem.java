
import java.io.IOException;
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
            if (request.getParameter("texto") != null) {
                String texto = request.getParameter("texto");
                String mensagens = request.getParameter("mensagens");

                Usuario usuario = (Usuario) request.getSession().getAttribute("eu");
                
                String json = this.json(usuario.getUsername(), texto, mensagens);
                
                request.getServletContext().setAttribute("json", json);
                
                response.sendRedirect("Conversar");
            }
        }
    }

    private String json(String usuario, String texto, String mensagens) {
        String json = "{";
        json += "\"mensagens\":\"" + mensagens + "\", ";
        json += "\"usuario\":\"" + usuario + "\", ";
        json += "\"texto\":\"" + texto + "\"";
        json += "}";
        
        return json;
    }
}
