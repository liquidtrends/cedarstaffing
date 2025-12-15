export default function Footer() {
  return (
    <footer className="w-full border-t p-6 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} CedarStaffing - A Subsidiary of <a href="https://cedarbrush.ca" target="_blank">CedarBrush</a>
    </footer>
  );
}