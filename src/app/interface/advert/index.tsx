import { Button } from "@/components/ui/button"

export function Advert() {
  return (
    <Button
      variant="outline"
      className="bg-yellow-400 border-stone-600/30 hover:bg-yellow-300"
      onClick={() => {
        window.open("https://huggingface.co/spaces/jbilcke-hf/ai-stories-factory", "_blank")
      }}>
      <span className="hidden md:inline">Make AI stories</span>
      <span className="inline md:hidden">...</span>
    </Button>
  )
}