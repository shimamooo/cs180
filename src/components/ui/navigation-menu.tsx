import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "~/lib/utils";
import { ChevronDown, List } from "lucide-react";
import { forwardRef } from "react";

export const NavigationMenuComponent = () => (
  <NavigationMenu.Root className="navigation-menu-root">
    <NavigationMenu.List className="navigation-menu-list">
      {/* <NavigationMenu.Item>
        <NavigationMenu.Trigger className="navigation-menu-trigger">
          Program <ChevronDown className="caret-down" aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="navigation-menu-content">
          <ul className="list one">
            <li style={{ gridRow: "span 3" }}>
              <NavigationMenu.Link asChild>
                <a className="callout" href="/#program">
                  <div className="callout-heading">Program 2025</div>
                  <p className="callout-text">
                    What we have planned for the next year.
                  </p>
                </a>
              </NavigationMenu.Link>
            </li>

            <ListItem href="/faq" title="">
              FAQ
            </ListItem>
            <ListItem href="/apply" title="">
              Apply
            </ListItem>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item> */}

      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="navigation-menu-trigger">
          About <ChevronDown className="caret-down" aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="navigation-menu-content">
          <ul className="list one">
            <ListItem title="Team" href="/team">
              Members and Advisors
            </ListItem>
            <ListItem title="FAQ" href="/faq">
              Frequently Asked Questions
            </ListItem>
            {/* <ListItem title="Blog" href="/blog">
              Blog Posts
            </ListItem>
            <ListItem title="Portfolio" href="/portfolio">
              Builder's We've Backed
            </ListItem> */}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator className="navigation-menu-indicator">
        <div className="arrow" />
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div className="viewport-position">
      <NavigationMenu.Viewport className="navigation-menu-viewport" />
    </div>
  </NavigationMenu.Root>
);

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenu.Link asChild>
      <a ref={ref} className={cn("list-item-link", className)} {...props}>
        <div className="list-item-heading">{title}</div>
        <p className="list-item-text">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
ListItem.displayName = "ListItem";
