using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        //Ver que es un logger
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        //Esta Prop se puede leer del Model - Para poder escribirla se tiene que agregar [BindProperty]
        //Si lo uso asi como esta solo puedo escribirla con un Post
        //Para poder usarla directamente desde el Get se agrega el SupportsGet 
        [BindProperty(SupportsGet = true)]
        public string FirstName { get; set; }

        //Aca se puede armar un metodo cada vez que se renderiza la pagina
        public void OnGet()
        {
            //Valor Default
            if (string.IsNullOrWhiteSpace(FirstName))
            {
                FirstName = "User";
            }
        }

        //Corre en cada Post a la pagina
        public void OnPost() 
        { 

        }
    }
}
