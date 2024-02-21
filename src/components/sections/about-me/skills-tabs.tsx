import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodingSKills from "./coding-skills"
import NetworkingSkills from "./infrastructure-skills"

const SkillsTabs = () => {
  return (
    
    <Tabs defaultValue="coding" className="">
      <TabsList className="md:w-[400px] mx-auto bg-zinc-800 grid grid-cols-2">
        <TabsTrigger value="coding" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-100">Coding</TabsTrigger>
        <TabsTrigger value="infrastructure" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-100">Infrastructure</TabsTrigger>          
      </TabsList>
      <TabsContent value="coding" className="mt-8">
        <CodingSKills />
      </TabsContent>
      <TabsContent value="infrastructure" className="mt-8">
        <NetworkingSkills />
      </TabsContent>        
    </Tabs>
    
  )
}

export default SkillsTabs