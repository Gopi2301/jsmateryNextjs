import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import Filter from '@/components/ui/Filter'
import { getResources } from '@/sanity/actions'
import React from 'react'
export const revalidate=900;

const Page = async() => {
  const Resources = await getResources({
    query: '',
    category:'',
    page:'1'
  })
  console.log(Resources);
  
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
<section className='nav-padding w-full'>
  <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
    <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>Javascript Mastery Resources</h1>
  </div>
  <SearchForm/>
  <section className="flex-center mt-6 w-full flex-col sm:mt-20">
   Header
   <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
  {Resources?.length>0 ? (Resources.map((resource:any)=>(
    <ResourceCard key={resource._id} title={resource.title} image={resource.image} id={resource._id} downloadNumber={resource.views} slug={resource.slug}/>
  ))):(<p className='body-regular text-white-400'>No resources found</p>)}
   </div>
  </section>
</section>
<Filter/>
    </main>
  )
}

export default Page
