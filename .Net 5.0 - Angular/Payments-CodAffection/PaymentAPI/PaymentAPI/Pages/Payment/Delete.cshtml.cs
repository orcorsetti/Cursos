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
    public class DeleteModel : PageModel
    {
        private readonly PaymentAPI.Models.PaymentDetailContext _context;

        public DeleteModel(PaymentAPI.Models.PaymentDetailContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            PaymentDetail = await _context.PaymentDetails.FindAsync(id);

            if (PaymentDetail != null)
            {
                _context.PaymentDetails.Remove(PaymentDetail);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
