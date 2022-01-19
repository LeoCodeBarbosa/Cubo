using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Cubo.API.ViewModels
{
    public class AlgarismoRomanoViewModel
    {
        public string Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public int Value_int { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Value_romano { get; set; }
    }
}
