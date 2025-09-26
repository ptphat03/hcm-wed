import { Card, CardContent } from "@/components/ui/card";

export function SidebarTOC() {
  return (
    <Card className="bg-yellow-50 border-red-200 shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-red-800 border-b border-red-300 pb-2">
          Mục lục
        </h2>
        <ul className="space-y-1">
          <li>
            <a
              href="#overview"
              className="block p-3 rounded-md text-red-700 hover:bg-red-100 hover:text-red-900 transition-colors"
            >
              Tổng quan
            </a>
          </li>
          <li>
            <a
              href="#theory"
              className="block p-3 rounded-md text-red-700 hover:bg-red-100 hover:text-red-900 transition-colors"
            >
              Lý thuyết
            </a>
          </li>
          <li>
            <a
              href="#practical"
              className="block p-3 rounded-md text-red-700 hover:bg-red-100 hover:text-red-900 transition-colors"
            >
              Giá trị thực tiễn
            </a>
          </li>
          <li>
            <a
              href="#references"
              className="block p-3 rounded-md text-red-700 hover:bg-red-100 hover:text-red-900 transition-colors"
            >
              Nguồn tham khảo
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
