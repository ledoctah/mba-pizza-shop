enum OrderStatusEnum {
  pending = 'Pendente',
  canceled = 'Cancelado',
  processing = 'Em preparo',
  delivering = 'Em entrega',
  delivered = 'Entregue',
}

export type OrderStatusType = keyof typeof OrderStatusEnum;

export interface OrderStatusProps {
  status: OrderStatusType;
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        ></span>
      )}

      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        ></span>
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        ></span>
      )}

      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-500"
        ></span>
      )}

      <span className="font-medium text-muted-foreground">
        {OrderStatusEnum[status]}
      </span>
    </div>
  );
}
