import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Previous Button */}
      <Button 
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          className={cn("w-10", currentPage === page && "bg-rose-500 text-white")}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {/* Next Button */}
      <Button 
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
