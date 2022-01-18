using Cubo.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cubo.Core.Configuration
{
    class AlgarismoRomanoConfiguration : IEntityTypeConfiguration<AlgarismoRomano>
    {
        public void Configure(EntityTypeBuilder <AlgarismoRomano> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Value_int)
                .IsRequired();
                

            builder.Property(p => p.Value_romano)
                .IsRequired()
                .HasMaxLength(200);

            builder.ToTable("algarismoRomano");
        }
    }
}
