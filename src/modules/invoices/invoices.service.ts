import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoicesRepository } from 'src/shared/database/repositories/invoices.repositories';

@Injectable()
export class InvoicesService {
  constructor(private readonly invoicesRepo: InvoicesRepository) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const {
      account_month,
      account_year,
      amount_compensated,
      amount_electricity,
      amount_sceee,
      num_client,
      url_file,
      value_compensated,
      value_electricity,
      value_sceee,
      value_street,
    } = createInvoiceDto;

    const invoice = await this.invoicesRepo.create({
      data: {
        account_month,
        account_year,
        amount_compensated,
        amount_electricity,
        amount_sceee,
        num_client,
        url_file,
        value_compensated,
        value_electricity,
        value_sceee,
        value_street,
      },
    });
    return invoice;
  }

  async findAll() {
    return await this.invoicesRepo.findAll();
  }

  async findOneById(id: string) {
    const invoice = await this.invoicesRepo.findFirst({
      where: { id: id },
    });

    if (!invoice) {
      throw new NotFoundException();
    }

    return invoice;
  }

  async findOneByClient(num_client: number) {
    const invoice = await this.invoicesRepo.findAll({
      where: { num_client: num_client },
    });

    if (!invoice) {
      throw new NotFoundException();
    }
    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const {
      account_month,
      account_year,
      amount_compensated,
      amount_electricity,
      amount_sceee,
      num_client,
      url_file,
      value_compensated,
      value_electricity,
      value_sceee,
      value_street,
    } = updateInvoiceDto;
    return await this.invoicesRepo.update({
      where: { id: id },
      data: {
        account_month,
        account_year,
        amount_compensated,
        amount_electricity,
        amount_sceee,
        num_client,
        url_file,
        value_compensated,
        value_electricity,
        value_sceee,
        value_street,
      },
    });
  }

  async remove(id: string) {
    await this.invoicesRepo.delete({
      where: { id: id },
    });

    return null;
  }
}
