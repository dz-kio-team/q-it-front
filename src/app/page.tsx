import { Button } from '@/shared/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to Q-IT</h1>
      <p className="text-muted-foreground mt-4 text-lg">면접 경험 공유 플랫폼</p>
      <Button className="mt-4" variant="outline">
        시작하기
      </Button>
    </main>
  );
}
