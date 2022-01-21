using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cubo.Core.Migrations
{
    public partial class Algarismo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "algarismoRomano",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Value_int = table.Column<int>(type: "int", nullable: false),
                    Value_romano = table.Column<string>(type: "varchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_algarismoRomano", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "algarismoRomano");
        }
    }
}
