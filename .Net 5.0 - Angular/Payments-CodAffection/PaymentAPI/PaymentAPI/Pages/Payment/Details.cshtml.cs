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
    public class DetailsModel : PageModel
    {
        private readonly PaymentAPI.Models.PaymentDetailContext _context;

        public DetailsModel(PaymentAPI.Models.PaymentDetailContext context)
        {
            _context = context;
        }

        public PaymentDetail PaymentDetail { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            PaymentDetail = await _context.PaymentDetails.FirstOrDefaultAsync(m => m.PaymentDetailId == id);

            if (PaymentDetail == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
