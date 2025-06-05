import { HeroSection } from "@/components/HeroSection"
import { Button } from "@/components/ui/button"
import image1 from "@/public/images/hero-1.jpg"

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <HeroSection />

      {/* Impact Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">10,000+</div>
              <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lives Impacted</div>
              <p className="text-gray-600 dark:text-gray-300">Through our various programs and initiatives</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">50+</div>
              <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Villages</div>
              <p className="text-gray-600 dark:text-gray-300">Communities we work with across India</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">100+</div>
              <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Volunteers</div>
              <p className="text-gray-600 dark:text-gray-300">Dedicated individuals making a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={image1.src}
                alt="Education Program"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-white/90">Quality education for underprivileged children</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={image1.src}
                alt="Healthcare Program"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                <p className="text-white/90">Healthcare services for rural communities</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={image1.src}
                alt="Women Empowerment Program"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Women Empowerment</h3>
                <p className="text-white/90">Skill development and entrepreneurship programs</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary dark:bg-black bg-white text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-black dark:text-white mb-8 max-w-2xl mx-auto">
        Your support can help us create lasting change in communities across India
          </p>
          <div className="space-x-4">
        <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
          Donate Now
        </Button>
        <Button size="lg" variant="outline" className="border-black text-black hover:bg-white/20 dark:border-white dark:text-white dark:hover:bg-white/20">
          Become a Volunteer
        </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
