using Cubo.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cubo.Core.Configuration
{
    public class ParticipationConfiguration : IEntityTypeConfiguration<Participation>
    {
        public void Configure(EntityTypeBuilder<Participation> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.FirstName)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(p => p.LastName)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(p => p.Value)
                .IsRequired();

            builder.ToTable("participation");
        }
    }
}