﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using PaymentAPI.Models;

namespace PaymentAPI.Pages.Forms
{
    public class CreateModel : PageModel
    {
        private readonly PaymentAPI.Models.PaymentDetailContext _context;

        public CreateModel(PaymentAPI.Models.PaymentDetailContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public PaymentDetail PaymentDetail { get; set; }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.PaymentDetails.Add(PaymentDetail);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
