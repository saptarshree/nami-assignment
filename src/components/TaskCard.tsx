import React from 'react';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiClock, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const TaskCard: React.FC = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks of the day</h2>
        <div className="flex items-center">
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            Not Accepted
          </button>
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            Ongoing
          </button>
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            Scheduled
          </button>
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            Completed
          </button>
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            Delayed
          </button>
          <button className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-6 h-6 text-gray-500 mr-3"></span>
            On time
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <Card className="bg-[#E53E3E] text-white w-96">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Not Accepted</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
              <Badge variant="secondary">20min</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#ED8936] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Ongoing</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
              <Badge variant="secondary">20min</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#48BB78] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
              <p className="text-sm mt-2">Shampoo x1</p>
              <p className="text-sm">Conditioner x2</p>
              <p className="text-sm">Towel x2</p>
              <p className="text-sm italic">Instructions: Please get conditioners.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> Notify Staff</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#4299E1] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">Delayed</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">1</Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
          <Card className="bg-[#38B2AC] text-white">
            <CardHeader>
              <CardTitle>Routine Cleaning</CardTitle>
              <Badge variant="secondary">On-Time</Badge>
              <Badge variant="secondary">Complaint</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm">21 Jul 2024 | 03:00 am</p>
              <p className="text-sm">From: Pantry</p>
              <p className="text-sm">To: Reception</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost"><FiAlertTriangle /> View Details</Button>
              <Badge variant="secondary">5</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
