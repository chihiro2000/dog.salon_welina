import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Services() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            サービス内容
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            当店では、ペットの個性や毛質に合わせた最適なケアをご提供しています。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.price}〜
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/price">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/price">料金表を見る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
