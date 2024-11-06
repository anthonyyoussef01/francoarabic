import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 md:p-24 sm:p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
          Franco-Arabic: The Language of Digital Arabia
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Franco-Arabic, also known as Franco, Arabizi, Arabish, Arabeezi, or the Arabic chat alphabet, is a way of writing Arabic using the Latin script and numbers. 
          It&apos;s widely used in informal online communication, especially among young people in the Arab world. 
        </p>
      </div>

      {/* How to Write in Franco-Arabic */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">How to Write in Franco-Arabic</h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          Franco-Arabic is a way of writing/transliterating Arabic using the Latin alphabet. 
          It emerged with the rise of digital communication and provides a convenient way to express Arabic 
          when standard Arabic keyboards are not readily available. 
          While it lacks a standardized orthography, there are common conventions:
        </p>
        <ul className="mt-4 list-disc list-inside text-lg leading-8 text-gray-500">
          <li><strong>Numbers replace certain Arabic letters: </strong> 
            As we will see, this is a core aspect of Franco-Arabic. For example, &apos;3&apos; represents the Arabic letter &apos;ع&apos; (ayn), &apos;7&apos; represents &apos;ح&apos; (haa), and &apos;2&apos; represents &apos;ء&apos; (hamza).
          </li>
          <li><strong>Vowels are often omitted: </strong> 
            Readers infer the vowels based on context, similar to how vowels are sometimes omitted in written Arabic. This can lead to ambiguity, but it&apos;s generally understood within the context of the conversation.
          </li>
          <li><strong>Words can be written phonetically: </strong> 
            The way words sound is often prioritized over standard Arabic spelling. This means that there can be multiple ways to write the same word in Franco-Arabic.
          </li>
          <li><strong>French influence: </strong> 
            Given its origins in North Africa and its connection to French-speaking communities, Franco-Arabic often incorporates French words and phrases. This adds another layer of complexity but also reflects the unique cultural blend of the practice.
          </li>
        </ul>

        <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-300">Arabic Letter Equivalents in Franco-Arabic</h3>
        <table className="mt-4 table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-300">Arabic Letter</th>
              <th className="px-4 py-2 text-left text-gray-300">Franco-Arabic Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-gray-500">ء (hamza)</td>
              <td className="px-4 py-2 text-gray-500">2</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ب (baa)</td>
              <td className="px-4 py-2 text-gray-500">b</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ت (taa)</td>
              <td className="px-4 py-2 text-gray-500">t</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ث (thaa)</td>
              <td className="px-4 py-2 text-gray-500">th</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ج (jiim / giim)</td>
              <td className="px-4 py-2 text-gray-500">j / g</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ح (haa)</td>
              <td className="px-4 py-2 text-gray-500">7</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">خ (khaa)</td>
              <td className="px-4 py-2 text-gray-500">kh / 5 / 7&apos;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">د (daal)</td>
              <td className="px-4 py-2 text-gray-500">d</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ذ (dhaal)</td>
              <td className="px-4 py-2 text-gray-500">z / dh</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ر (raa)</td>
              <td className="px-4 py-2 text-gray-500">r</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ز (zaayn)</td>
              <td className="px-4 py-2 text-gray-500">z</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">س (siin)</td>
              <td className="px-4 py-2 text-gray-500">s</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ش (shiin)</td>
              <td className="px-4 py-2 text-gray-500">sh</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ص (saad)</td>
              <td className="px-4 py-2 text-gray-500">s / 9</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ض (daad)</td>
              <td className="px-4 py-2 text-gray-500">d / 9&apos;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ط (taa)</td>
              <td className="px-4 py-2 text-gray-500">t / 6</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ظ (zaa)</td>
              <td className="px-4 py-2 text-gray-500">z / dh</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ع (ayn)</td>
              <td className="px-4 py-2 text-gray-500">3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">غ (ghayn)</td>
              <td className="px-4 py-2 text-gray-500">gh / 3&apos;</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ف (faa)</td>
              <td className="px-4 py-2 text-gray-500">f</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ق (qaaf)</td>
              <td className="px-4 py-2 text-gray-500">q / k</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ك (kaaf)</td>
              <td className="px-4 py-2 text-gray-500">k</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ل (laam)</td>
              <td className="px-4 py-2 text-gray-500">l</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">م (miim)</td>
              <td className="px-4 py-2 text-gray-500">m</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ن (noon)</td>
              <td className="px-4 py-2 text-gray-500">n</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ه (haa)</td>
              <td className="px-4 py-2 text-gray-500">h</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">و (waaw)</td>
              <td className="px-4 py-2 text-gray-500">w / ou / u / oo</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-500">ى (yaa)</td>
              <td className="px-4 py-2 text-gray-500">y / i / ee</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          It&apos;s important to remember that Franco-Arabic is a fluid and evolving system of writing. 
          Variations exist depending on regional and personal preferences. 
          While the table above provides a general guide, there might be slight differences in how certain letters are represented. 
          The key is to be flexible and adapt to the context in which you encounter it.
        </p>
      </div>

      {/* Example Sentences */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">Example Sentences</h2>
        <table className="mt-4 w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="px-4 py-2 border border-gray-700">Arabic</th>
              <th className="px-4 py-2 border border-gray-700">Franco-Arabic</th>
              <th className="px-4 py-2 border border-gray-700">English</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-500">
              <td className="px-4 py-2 border border-gray-700">مرحبا</td>
              <td className="px-4 py-2 border border-gray-700">Mar7aban</td>
              <td className="px-4 py-2 border border-gray-700">Hello</td>
            </tr>
            <tr className="text-gray-500">
              <td className="px-4 py-2 border border-gray-700">كيف حالك؟</td>
              <td className="px-4 py-2 border border-gray-700">Kif 7alak?</td>
              <td className="px-4 py-2 border border-gray-700">How are you?</td>
            </tr>
            <tr className="text-gray-500">
              <td className="px-4 py-2 border border-gray-700">أنا بخير، شكرا</td>
              <td className="px-4 py-2 border border-gray-700">Ana bkheir, shukran</td>
              <td className="px-4 py-2 border border-gray-700">I&apos;m fine, thank you</td>
            </tr>
            <tr className="text-gray-500">
              <td className="px-4 py-2 border border-gray-700">مع السلامة</td>
              <td className="px-4 py-2 border border-gray-700">Ma3a ssalama / Ma3 el slama</td>
              <td className="px-4 py-2 border border-gray-700">Goodbye</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Variations and Impact */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">Variations and Impact</h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          Franco-Arabic has regional variations, with different conventions used in different Arab countries. 
          Its widespread use has had a significant impact on digital communication in the Arab world, 
          making it easier for people to connect and express themselves online.
        </p>
      </div>

      {/* History */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">History</h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          The use of Latin script to write Arabic dates back to the French colonial period in North Africa. 
          However, Franco-Arabic as we know it today emerged with the rise of the internet and mobile phones. 
          It provided a convenient way for Arabic speakers to communicate using technology that was often not designed 
          to support the Arabic script.
        </p>
      </div>

      {/* Cultural Significance */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">Cultural Significance</h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          Franco-Arabic is more than just a writing system; it reflects a unique blend of cultures and languages. 
          It&apos;s a symbol of the digital age and the evolving ways people communicate in a globalized world. 
          While some may view it as a threat to the Arabic language, others see it as a creative and dynamic form 
          of expression that connects people across borders.
        </p>
      </div>

      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300">
          Want to Learn More?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          Explore Arabic words, meanings, dialects, and more at&nbsp;
          <a
            href="https://www.qamous.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 relative group transition-colors duration-300 hover:text-orange-400"
          >
            qamous.org
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>

        </p>
      </div>
    </main>
  );
}