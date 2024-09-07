import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";


export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Call for Papers
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
        >
          Technical papers are solicited on the topics pertaining to the scope of the conference will include, but are not limited to, the following:
        </Typography>
      </div>
      <Tabs value="Track1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Track1" className="font-medium">
              Track 1
            </Tab>
            <Tab value="Track2" className="font-medium">
              Track 2
            </Tab>
          </TabsHeader>

          {/* main content of tabs */}
          <TabsBody>
            <TabPanel value="Track1">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold my-5">TRACK 1: Innovative Product Design</h1>
                <p className="text-2xl text-left mb-5">
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                      Computer Aided Design
                    </li>
                    <li>
                      Design Aesthetics
                    </li>
                    <li>
                      Design for Cost & Sustainability
                    </li>
                    <li>
                      Design Creativity & Optimization
                    </li>
                    <li>
                      Design for Sustainability
                    </li>
                    <li>
                      Human Factors and Ergonomics in Design
                    </li>
                    <li>
                      UX/UI Design
                    </li>
                    <li>
                      Human Computer Interaction
                    </li>
                    <li>
                      Materials Selection for Design
                    </li>
                  </ul>
                </p>
              </div>
            </TabPanel>

            <TabPanel value="Track2">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold my-5">TRACK 2: Intelligent Manufacturing Systems</h1>
                <p className="text-2xl text-left mb-5">
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Artificial Intelligence in manufacturing processes</li>
                    <li>Optimization and simulation</li>
                    <li>Process planning and Scheduling</li>
                    <li>Smart Manufacturing</li>
                    <li>Virtual Manufacturing</li>
                    <li>Robotics, Mechatronics & Automation</li>
                    <li>Precision engineering and metrology</li>
                    <li>Supply Chain Management</li>
                    <li>CAD/CAM/CAE</li>
                  </ul>
                </p>
              </div>
            </TabPanel>

          </TabsBody>
        </div>
      </Tabs>
    </section>
  );
}

export default EventContent;
