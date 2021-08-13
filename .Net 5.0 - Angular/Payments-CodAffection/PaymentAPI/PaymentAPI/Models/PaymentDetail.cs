using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        [Required]
        [StringLength(100, MinimumLength = 3)]
        [RegularExpression(@"^[a-zA-Z ]*$")]
        public string CardOwnerName { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        [Required]
        [StringLength(16)]
        [RegularExpression(@"^(\d{16})$")]
        public string CardNumber { get; set; }

        [Column(TypeName = "nvarchar(5)")]
        [Required]
        [StringLength(5)]
        [RegularExpression(@"^(\d\d\/\d\d)$")]
        public string ExpirationDate { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        [Required]
        [StringLength(3)]
        [RegularExpression(@"^(\d{3})$")]
        public string SecurityCode { get; set; }
    }
}
