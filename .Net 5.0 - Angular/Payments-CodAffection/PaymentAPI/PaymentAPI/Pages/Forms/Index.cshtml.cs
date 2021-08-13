using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

namespace PaymentAPI.Pages.Forms
{
    public class IndexModel : PageModel
    {
        private readonly PaymentAPI.Models.PaymentDetailContext _context;

        public IndexModel(PaymentAPI.Models.PaymentDetailContext context)
        {
            _context = context;
        }

        public IList<PaymentDetail> PaymentDetail { get;set; }

        public async Task OnGetAsync()
        {
            PaymentDetail = await _context.PaymentDetails.ToListAsync();
        }
    }
}
