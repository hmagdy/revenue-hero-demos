interface Window {
    dataLayer: any;
    delighted: any;
    analytics: any;
    Intercom: (operation: string, options?: Record<string, any>) => void;
    RevenueHero: typeof RevenueHero;
  }

  // Define the RevenueHero constructor
interface RevenueHeroOptions {
  routerId: string;
}

interface RevenueHeroDialog {
  open(data: any): void;
}

interface RevenueHeroInstance {
  submit(options: Record<string, any>): Promise<any>;
  dialog: RevenueHeroDialog;
}

declare class RevenueHero {
  constructor(options: RevenueHeroOptions);
  submit(options: Record<string, any>): Promise<any>;
  dialog: RevenueHeroDialog;
}

// Now you can use the RevenueHero constructor globally
// declare const RevenueHero: RevenueHero;