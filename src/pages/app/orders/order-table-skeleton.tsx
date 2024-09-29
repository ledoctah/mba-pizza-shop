import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export function OrderTableSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <Button
                aria-label="Detalhes do pedido"
                variant="outline"
                size="xs"
              >
                <Search className="h-3 w-3" aria-label="Detalhes do pedido" />
              </Button>
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[172px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[148px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[110px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[200px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[64px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[92px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-3 w-[92px]" />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
