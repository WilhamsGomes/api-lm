-- CreateTable
CREATE TABLE "invoices" (
    "id" UUID NOT NULL,
    "num_client" INTEGER NOT NULL,
    "account_month" INTEGER NOT NULL,
    "account_year" INTEGER NOT NULL,
    "url_file" TEXT,
    "amount_electricity" INTEGER NOT NULL,
    "value_electricity" DOUBLE PRECISION NOT NULL,
    "amount_sceee" INTEGER NOT NULL,
    "value_sceee" DOUBLE PRECISION NOT NULL,
    "amount_compensated" INTEGER NOT NULL,
    "value_compensated" DOUBLE PRECISION NOT NULL,
    "value_street" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);
