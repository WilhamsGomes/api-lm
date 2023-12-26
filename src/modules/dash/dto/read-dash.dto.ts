import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReadDashDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['count', 'month', 'year'])
  aggr: string;

  @IsString()
  @IsOptional()
  num_client: string;

  // @IsInt()
  // @IsOptional()
  // @Min(1)
  // @Max(12)
  // gte_month: number;

  // @IsInt()
  // @IsOptional()
  // @Length(4, 4)
  // year: number;

  // @IsInt()
  // @IsOptional()
  // @Min(1)
  // @Max(12)
  // lte_month: number;
}
