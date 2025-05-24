import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { navBarLinks } from '@/config';
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Open mobile menu">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <VisuallyHidden>
          <SheetTitle>Mobile Menu</SheetTitle>
        </VisuallyHidden>

        <div className="ml-5">
          <nav className="mt-4 space-y-2">
            {navBarLinks.map((lnk, index) => (
              <a key={index} href={lnk.url} className="block text-lg font-semibold hover:underline">
                {lnk.title}
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
