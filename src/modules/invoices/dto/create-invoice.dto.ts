import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
  Min,
  IsInt,
  Max,
  Length,
} from 'class-validator';
export class CreateInvoiceDto {
  @IsNumber()
  @IsNotEmpty()
  num_client: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(12)
  account_month: number;

  @IsInt()
  @IsNotEmpty()
  @Length(4, 4)
  account_year: number;

  @IsString()
  @IsOptional()
  url_file: string;

  @IsNumber()
  @IsNotEmpty()
  amount_electricity: number;

  @IsNumber()
  @IsNotEmpty()
  value_electricity: number;

  @IsNumber()
  @IsNotEmpty()
  amount_sceee: number;

  @IsNumber()
  @IsNotEmpty()
  value_sceee: number;

  @IsNumber()
  @IsNotEmpty()
  amount_compensated: number;

  @IsNumber()
  @IsNotEmpty()
  value_compensated: number;

  @IsNumber()
  @IsNotEmpty()
  value_street: number;
}
