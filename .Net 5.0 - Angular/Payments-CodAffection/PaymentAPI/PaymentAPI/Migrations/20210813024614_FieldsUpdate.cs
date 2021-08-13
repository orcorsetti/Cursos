using Microsoft.EntityFrameworkCore.Migrations;

namespace PaymentAPI.Migrations
{
    public partial class FieldsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SecurityCode",
                table: "PaymentDetails",
                type: "nvarchar(3)",
                maxLength: 3,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(3)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ExpirationDate",
                table: "PaymentDetails",
                type: "nvarchar(5)",
                maxLength: 5,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(5)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CardOwnerName",
                table: "PaymentDetails",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CardNumber",
                table: "PaymentDetails",
                type: "nvarchar(16)",
                maxLength: 16,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(16)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SecurityCode",
                table: "PaymentDetails",
                type: "nvarchar(3)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(3)",
                oldMaxLength: 3);

            migrationBuilder.AlterColumn<string>(
                name: "ExpirationDate",
                table: "PaymentDetails",
                type: "nvarchar(5)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(5)",
                oldMaxLength: 5);

            migrationBuilder.AlterColumn<string>(
                name: "CardOwnerName",
                table: "PaymentDetails",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "CardNumber",
                table: "PaymentDetails",
                type: "nvarchar(16)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(16)",
                oldMaxLength: 16);
        }
    }
}
