import IconButton from '@/components/IconButton'
import { ReactSVG } from 'react-svg'
import EmailInputButton from '@/img/email-input-button.svg'
import NumberInputButton from '@/img/number-input-button.svg'
import PasswordInputButton from '@/img/password-input-button.svg'
import PhoneInputButton from '@/img/phone-input-button.svg'
import RangerInputButton from '@/img/ranger-input-button.svg'
import SearchInputButton from '@/img/search-input-button.svg'
import TextInputButton from '@/img/text-input-button.svg'
import UrlInputButton from '@/img/url-input-button.svg'
import { Newspaper, Menu, Search, CircleUser } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center sticky top-0 border-b h-16 gap-4 bg-background px-4 md:px-6">
        <nav className="hidden
                        flex-col
                        gap-6
                        text-lg
                        font-medium
                        md:flex
                        md:flex-row
                        md:items-center
                        md:gap-5
                        md:text-sm
                        lg:gap-6"
        >
          <a href="#" className="">
            <Newspaper className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Attribute Specifications
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Orders
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Customers
          </a>
          <a href="#" className="text-foreground transition-colors hover:text-foreground">
            Settings
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                <Newspaper className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Orders
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Products
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Customers
              </a>
              <a href="#" className="hover:text-foreground">
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex
                       min-h-[calc(100vh_-_theme(spacing.16))]
                       flex-1
                       flex-col
                       gap-4
                       bg-muted/40
                       p-4
                       md:gap-8
                       md:p-10">
        <Card x-chunk="table">
          <CardHeader>
            <CardTitle>Componentes</CardTitle>
            <CardDescription>
              <div className="flex gap-4">
                <IconButton src={'text-input-button'} label={'Text Input'} />
                <IconButton src={'email-input-button'} label={'Email Input'} />
                <IconButton src={'password-input-button'} label={'Password Input'} />
                <IconButton src={'number-input-button'} label={'Number Input'} />
                <IconButton src={'phone-input-button'} label={'Phone Input'} />
                <IconButton src={'ranger-input-button'} label={'Ranger Input'} />
                <IconButton src={'search-input-button'} label={'Search Input'} />
                <IconButton src={'url-input-button'} label={'Url Input'} />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
        </Card>
      </main>
    </div >
  )
}

export default App
