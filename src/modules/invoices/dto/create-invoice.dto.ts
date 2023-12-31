import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
  Min,
  IsInt,
  Max,
} from 'class-validator';
export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  num_client: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(12)
  account_month: number;

  @IsInt()
  @IsNotEmpty()
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
