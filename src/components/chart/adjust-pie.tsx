import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface AdjustPieProps {
  total: number;
  handleChangeTotal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  months: number;
  handleChangeMonths: (e: any) => void;
}

export function AdjustPie({
  total,
  handleChangeTotal,
  months,
  handleChangeMonths,
}: AdjustPieProps) {
  return (
    <Card className="min-w-sm">
      <CardHeader>
        <CardTitle>Ändra värden</CardTitle>
        <CardDescription>Här kan du ändra värden för pajen</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <Label>Årsbelopp</Label>
          <Input value={total} onChange={handleChangeTotal} />
        </div>
        <div className="flex flex-col space-y-4">
          <Label>Ändra antal månader</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Slider
                  value={[months]}
                  onValueChange={handleChangeMonths}
                  min={1}
                  max={12}
                  step={1}
                />
              </TooltipTrigger>
              <TooltipContent>Antal månader: {months}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
