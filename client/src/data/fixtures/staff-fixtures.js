import _ from 'lodash';

module.exports = [
    {
        path: '/staff/get',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {
                    name: 'Emilia Clarke',
                    email: 'staff@opensupports.com',
                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                    level: 1,
                    staff: true,
                    departments: [
                        {id: 1, name: 'Sales Support'},
                        {id: 2, name: 'Technical Issues'}
                    ]
                }
            };
        }
    },
    {
        path: '/staff/get-tickets',
        time: 300,
        response: function () {
            return {
                status: 'success',
                data: [
                    {
                        ticketNumber: '445441',
                        title: 'Problem with installation',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 2,
                            name: 'Technical Issues'
                        },
                        date: '201604161230',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: true,
                        closed: false,
                        priority: 'low',
                        author: {
                            id: 12,
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            id: 15,
                            name: 'Steve Jobs',
                            email: 'steve@jobs.com'
                        },
                        events: [
                            {
                                type: 'ASSIGN',
                                date: '201504091149',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504091238',
                                content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'UN_ASSIGN',
                                date: '201504102349',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'DEPARTMENT_CHANGED',
                                date: '201504110021',
                                content: 'System support',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504120123',
                                content: 'I have already installed apache, but the problem persists',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'PRIORITY_CHANGED',
                                date: '201504130402',
                                content: 'MEDIUM',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201505110405',
                                content: 'Thanks!, I solved it by myself',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'CLOSE',
                                date: '201505130429',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'RE_OPEN',
                                date: '201510180430',
                                author: {
                                    name: 'Haskell Curry',
                                    email: 'haskell@lambda.com',
                                    staff: false
                                }
                            }
                        ]
                    },
                    {
                        ticketNumber: '878552',
                        title: 'Lorem ipsum door',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 2,
                            name: 'Technical Issues'
                        },
                        date: '201604150550',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: false,
                        closed: false,
                        priority: 'medium',
                        author: {
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            name: 'Steve Jobs'
                        },
                        events: [
                            {
                                type: 'ASSIGN',
                                date: '201504091010',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504091012',
                                content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'UN_ASSIGN',
                                date: '201504101245',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'DEPARTMENT_CHANGED',
                                date: '201504112359',
                                content: 'System support',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504122359',
                                content: 'I have already installed apache, but the problem persists',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'PRIORITY_CHANGED',
                                date: '201504132240',
                                content: 'MEDIUM',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201505112241',
                                content: 'Thanks!, I soved it by myself',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'CLOSE',
                                date: '201505132243',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'RE_OPEN',
                                date: '201510182250',
                                author: {
                                    name: 'Haskell Curry',
                                    email: 'haskell@lambda.com',
                                    staff: false
                                }
                            }
                        ]
                    },
                    {
                        ticketNumber: '118551',
                        title: 'Lorem ipsum door',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 2,
                            name: 'Technical Issues'
                        },
                        date: '201504092255',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: false,
                        closed: false,
                        priority: 'high',
                        author: {
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            name: 'Steve Jobs'
                        },
                        events: [
                            {
                                type: 'ASSIGN',
                                date: '201504092300',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504092301',
                                content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'UN_ASSIGN',
                                date: '201504102302',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'DEPARTMENT_CHANGED',
                                date: '201504112303',
                                content: 'System support',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201504122304',
                                content: 'I have already installed apache, but the problem persists',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'PRIORITY_CHANGED',
                                date: '201504132305',
                                content: 'MEDIUM',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'COMMENT',
                                date: '201505112306',
                                content: 'Thanks!, I soved it by myself',
                                author: {
                                    name: 'Haskell Curry',
                                    steve: 'haskell@lambda.com',
                                    staff: false
                                }
                            },
                            {
                                type: 'CLOSE',
                                date: '201505132307',
                                author: {
                                    name: 'Emilia Clarke',
                                    email: 'jobs@steve.com',
                                    profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                    staff: true
                                }
                            },
                            {
                                type: 'RE_OPEN',
                                date: '201510182309',
                                author: {
                                    name: 'Haskell Curry',
                                    email: 'haskell@lambda.com',
                                    staff: false
                                }
                            }
                        ]
                    },
                    {
                        ticketNumber: '445441',
                        title: 'Inscription ACM ICPC',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 1,
                            name: 'Sales Support'
                        },
                        date: '201604162310',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: false,
                        closed: false,
                        priority: 'low',
                        author: {
                            id: 12,
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            id: 15,
                            name: 'Steve Jobs',
                            email: 'steve@jobs.com'
                        },
                        events: []
                    }
                ]
            }
        }
    },
    {
        path: '/staff/get-new-tickets',
        time: 300,
        response: function () {
            return {
                status: 'success',
                data: [
                    {
                        ticketNumber: '445441',
                        title: 'Inscription ACM ICPC',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 1,
                            name: 'Sales Support'
                        },
                        date: '201604161040',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: true,
                        closed: false,
                        priority: 'low',
                        author: {
                            id: 12,
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            id: 15,
                            name: 'Steve Jobs',
                            email: 'steve@jobs.com'
                        },
                        events: []
                    },
                    {
                        ticketNumber: '445441',
                        title: 'Inscription ACM ICPC',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 1,
                            name: 'Sales Support'
                        },
                        date: '201604161042',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: true,
                        closed: false,
                        priority: 'low',
                        author: {
                            id: 12,
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            id: 15,
                            name: 'Steve Jobs',
                            email: 'steve@jobs.com'
                        },
                        events: []
                    },
                    {
                        ticketNumber: '445441',
                        title: 'Code jam is awesome',
                        content: 'I had a problem with the installation of the php server',
                        department: {
                            id: 2,
                            name: 'Technical Issues'
                        },
                        date: '201604161055',
                        file: 'http://www.opensupports.com/some_file.zip',
                        language: 'en',
                        unread: true,
                        closed: false,
                        priority: 'low',
                        author: {
                            id: 12,
                            name: 'Haskell Curry',
                            email: 'haskell@lambda.com'
                        },
                        owner: {
                            id: 15,
                            name: 'Steve Jobs',
                            email: 'steve@jobs.com'
                        },
                        events: []
                    }
                ]
            }
        }
    },
    {
        path: '/staff/get-all-tickets',
        time: 1000,
        response: function () {
            return {
                status: 'success',
                data: {
                    tickets: _.range(0, 10).map(() => {
                        return {
                            ticketNumber: '445441',
                            title: 'Inscription ACM ICPC',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 1,
                                name: 'Sales Support'
                            },
                            date: '201604161055',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: false,
                            closed: false,
                            priority: 'low',
                            author: {
                                id: 12,
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                id: 15,
                                name: 'Steve Jobs',
                                email: 'steve@jobs.com'
                            },
                            events: []
                        };
                    }),
                    pages: 4
                }
            }

        }
    },
    {
        path: '/staff/search-tickets',
        time: 300,
        response: function () {
            return {
                status: 'success',
                data: {
                    tickets: _.range(0, 10).map(() => {
                        return {
                            ticketNumber: '445441',
                            title: 'Inscription ACM ICPC',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 1,
                                name: 'Sales Support'
                            },
                            date: '201604161100',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: false,
                            closed: false,
                            priority: 'low',
                            author: {
                                id: 12,
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                id: 15,
                                name: 'Steve Jobs',
                                email: 'steve@jobs.com'
                            },
                            events: []
                        };
                    }),
                    pages: 2
                }
            }
        }
    },
    {
        path: '/staff/get-all',
        time: 100,
        response: function() {
            return {
                status: 'success',
                data: [
                    {
                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                        name: 'Emilia Clarke',
                        departments: [{id: 2, name: 'Technical issues'}],
                        assignedTickets: 4,
                        closedTickets: 21,
                        lastLogin: 201612121150
                    },
                    {
                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                        name: 'Yulian A GUI Yermo',
                        departments: [{id: 2, name: 'Technical issues'}, {id: 1, name: 'Sales Support'}],
                        assignedTickets: 9,
                        closedTickets: 0,
                        lastLogin: 201612121155
                    },
                    {
                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                        name: 'Miltona Costa',
                        departments: [{id: 1, name: 'Sales Support'}],
                        assignedTickets: -1,
                        closedTickets: -1,
                        lastLogin: 201602121158
                    },
                    {
                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                        name: 'Emiliasnikova Rusachestkvuy',
                        departments: [{id: 1, name: 'Sales Support'}, {id: 3, name: 'System and Administration'}],
                        assignedTickets: 100,
                        closedTickets: 21,
                        lastLogin: 201301012346
                    },
                    {
                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                        name: 'Laurita Morrechaga Rusachestkvuy',
                        departments: [{id: 3, name: 'System and Administration'}],
                        assignedTickets: 1,
                        closedTickets: 1,
                        lastLogin: 20120501330
                    }
                ]
            };
        }
    },
    {
        path: '/staff/add',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {
                    staffId: 5
                }
            };
        }
    }
];
