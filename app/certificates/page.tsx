import Image from "next/image";

export default function Certificates() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Certifications</h1>

      {/* INTRO */}
      <p className="text-gray-600 max-w-3xl mb-16">
        Below are some of the certifications and achievements I have earned
        through academic learning, workshops, and skill development programs.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">

        {/* CERTIFICATE 1 */}
        <div className="border rounded-lg p-5 hover:shadow-md transition">
          <Image
            src="/uipath.jpeg"
            alt="Certificate 1"
            width={400}
            height={260}
            className="rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">
            RPA Automation using UiPath
          </h3>
          <p className="text-sm text-gray-600">
            Issued by UiPath from college
          </p>
          <p className="text-sm text-gray-500">
            Year: 2025
          </p>
        </div>

        {/* CERTIFICATE 2 */}
        <div className="border rounded-lg p-5 hover:shadow-md transition">
          <Image
            src="/Python_internship_1.jpeg"
            alt="Certificate 2"
            width={400}
            height={260}
            className="rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">
            Python Programming Certification
          </h3>
          <p className="text-sm text-gray-600">
            Issued by EZTS company
          </p>
          <p className="text-sm text-gray-500">
            Year: 2024
          </p>
        </div>
        {/* CERTIFICATE 3 */}
        <div className="border rounded-lg p-5 hover:shadow-md transition">
          <Image
            src="/certificate_1.jpeg"
            alt="Hockey"
            width={400}
            height={260}
            className="rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">
            Inter Collegiate Divison Level Tournament
          </h3>
          <p className="text-sm text-gray-600">
            Issued by VISVESVARAYA TECHNOLOGICAL UNIVERSITY with BITM
          </p>
          <p className="text-sm text-gray-500">
            Year: 2025
          </p>
        </div>
        {/* CERTIFICATE 1 */}
        <div className="border rounded-lg p-5 hover:shadow-md transition">
          <Image
            src="/certificate_2.jpeg"
            alt="Hockey"
            width={400}
            height={260}
            className="rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-1">
            Inter Collegiate State Level Tournament
          </h3>
          <p className="text-sm text-gray-600">
            Issued by VISVESVARAYA TECHNOLOGICAL UNIVERSITY with BITM
          </p>
          <p className="text-sm text-gray-500">
            Year: 2025
          </p>
        </div>

      </div>

    </main>
  );
}
