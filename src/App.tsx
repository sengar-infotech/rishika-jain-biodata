import { Mail, Phone, MapPin, Briefcase, GraduationCap, Heart, Home, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="relative bg-gradient-to-r from-amber-100 via-stone-50 to-amber-50 px-8 md:px-16 py-16">
            <div className="flex flex-col md:flex-row items-center gap-12">

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur opacity-20 group-hover:opacity-30 transition"></div>
                <img
                  src="/images/WhatsApp_Image_2026-03-24_at_3.49.02_PM_(1).jpeg"
                  alt="Profile"
                  className="relative w-64 h-64 object-cover rounded-full shadow-2xl ring-4 ring-white"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-6 py-2 bg-white rounded-full shadow-md mb-4">
                  <span className="text-amber-700 font-medium text-sm tracking-wide">Marriage Biodata</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
                  Rishika Jain
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Warm and family-oriented individual
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full mt-6 mx-auto md:mx-0"></div>
              </div>
            </div>
          </div>

          <div className="px-8 md:px-16 py-12 space-y-12">

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="text-amber-600" size={32} />
                About Me
              </h2>
              <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-amber-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A warm and family-oriented individual with a passion for learning and personal growth. Currently pursuing
                  my Chartered Accountancy qualification while maintaining strong traditional values. I enjoy travelling,
                  listening to music, and cooking. I come from a well-respected Jain family based in Rajasthan and believe
                  in building meaningful relationships founded on trust, respect, and mutual understanding.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">

              <section>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="text-amber-600" size={32} />
                  Personal Details
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 space-y-4">
                  <DetailRow label="Date of Birth" value="03 September, 2000" />
                  <DetailRow label="Birth Time" value="05:45 AM" />
                  <DetailRow label="Birth Place" value="Thanwala, Nagaur" />
                  <DetailRow label="Height" value="5'2&quot;" />
                  <DetailRow label="Complexion" value="Fair" />
                  <DetailRow label="Education" value="B.Com, CA (pursuing)" />
                  <DetailRow label="Hobbies" value="Travelling, Music, Cooking" />
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Home className="text-amber-600" size={32} />
                  Family Details
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 space-y-4">
                  <DetailRow label="Father" value="Mahendra Kumar Jain" />
                  <DetailRow label="Father's Business" value="Panna Jewellers & SW Carpet (Chennai)" />
                  <DetailRow label="Mother" value="Kamana Jain" />
                  <DetailRow label="Siblings" value="Twinkle Jain, Tanu Jain, Sambhav Jain" />
                  <DetailRow label="Religion" value="Jain" />
                  <DetailRow label="Family Status" value="Well-respected Jain family" />
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-amber-600" size={32} />
                Educational & Professional Details
              </h2>
              <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-100">
                <div className="space-y-4">
                  <DetailRow label="Qualification" value="B.Com" />
                  <DetailRow label="Current Pursuit" value="Chartered Accountancy (CA)" />
                  <DetailRow label="Current Location" value="Beawar, Rajasthan" />
                  <DetailRow label="Hometown" value="Thanwala, Nagaur" />
                  <div className="pt-4 border-t border-amber-200">
                    <p className="text-gray-700 leading-relaxed">
                      Dedicated to achieving excellence in Chartered Accountancy while maintaining strong family values
                      and cultural traditions. Actively involved in family business operations and community activities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-amber-600" size={32} />
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <GalleryImage src="/images/WhatsApp_Image_2026-03-24_at_3.11.09_PM.jpeg" />
                <GalleryImage src="/images/WhatsApp_Image_2026-03-24_at_3.11.09_PM_(1).jpeg" />
                <GalleryImage src="/images/WhatsApp_Image_2026-03-24_at_3.49.02_PM.jpeg" />
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="text-amber-600" size={32} />
                Partner Expectations
              </h2>
              <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-amber-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Seeking a well-educated, understanding, and family-oriented life partner who values tradition while
                  embracing modernity. Looking for someone who believes in mutual respect, open communication, shared values,
                  and building a harmonious life rooted in trust and compassion.
                </p>
              </div>
            </section>

            <section className="border-t border-stone-200 pt-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Phone className="text-amber-600" size={32} />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ContactCard
                  icon={<Phone className="text-amber-600" size={24} />}
                  label="Father's Contact"
                  value="+91 98286 84048"
                />
                <ContactCard
                  icon={<Phone className="text-amber-600" size={24} />}
                  label="Guardian Contact"
                  value="+91 99295 70507"
                />
              </div>
              <div className="mt-6 bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
                <div className="space-y-4">
                  <DetailRow label="Current Address" value="Beawar, Rajasthan, India" />
                  <DetailRow label="Hometown" value="Thanwala, Nagaur, Rajasthan" />
                  <DetailRow label="Family Name" value="Jain" />
                </div>
              </div>
            </section>

          </div>

          <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-amber-100 px-8 py-6">
            <p className="text-center text-gray-600 text-sm">
              Created with love and best wishes for a beautiful future
            </p>
          </div>
        </div>

        {/* <div className="text-center mt-8">
          <button
            onClick={() => window.print()}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Download PDF
          </button>
        </div> */}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-stone-100 last:border-0">
      <span className="font-medium text-gray-500 text-sm uppercase tracking-wide">{label}</span>
      <span className="font-medium text-gray-900 text-right">{value}</span>
    </div>
  );
}

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-amber-50 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">{label}</p>
          <p className="text-gray-900 font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
