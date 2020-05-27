const debt = {
    debtId: 15366,
    entity: "CSUK",
    customerRef: "Test - Please Ignore",
    debtorRef: "Test - Please Ignore",
    name: "Lia Hartmann",
    settledDate: "2019-06-11T01:49:21.445Z",
    invoiceAmount: "254.44",
    amountPaid: "141.30",
    amountOutstanding: "78.84",
    sendAsLetter: true,
    sendAsEmail: true,
    active: false,
    customerId: 28139,
    userId: 100957214,
    culture: "Ameliorated",
    invoiceDate: "2019-11-28T18:24:08.538Z",
    invoiceOutstanding: 68,
    invoicePaid: 7948,
    isScheduled: true,
    plaintiffId: 0,
    yourRef1: "web-readiness Plain",
    yourRef2: "synthesize sky blue Principal",
    debtorName: "Giovanna Crona",
    debtorAddress1: "3825 Emily Extension",
    debtorAddress2: "Emmerichchester",
    debtorAddress3: "67456",
    debtorAddress4: "Nevada",
    debtorAddress5: "Suite 549",
    debtorAddress6: "Kaycee Hills",
    debtorAddress7: "Nepal",
    debtorAddress8: "Berkshire",
    debtorAddress9: "CK",
    debtorEmail: "Domenica.Langosh35@hotmail.com",
    debtorReference1: "Park transmitting",
    debtorReference2: "system Health synthesize",
    audits: [
      {
        auditDate: "2019-10-12T20:00:47.313Z",
        auditId: 0,
        auditItemId: 0,
        auditOperation: 0,
        auditType: 0,
        user: {
          customerId: 28139,
          userId: 100957214,
        },
        values: [
          {
            newValue: "Small",
            oldValue: "Massachusetts",
          },
        ],
      },
    ],
    auditSummaries: [
      {
        changedAt: "2020-03-14T23:08:26.072Z",
        changes: 14,
        operation: 97,
      },
    ],
    letters: [
      {
        auditSummaries: [
          {
            changedAt: "2020-03-30T20:14:04.815Z",
            changes: 8,
            operation: 51,
          },
        ],
        audits: [
          {
            auditDate: "2020-02-29T16:55:58.068Z",
            auditId: 0,
            auditItemId: 0,
            auditOperation: 0,
            auditType: 0,
            user: {
              customerId: 28139,
              userId: 100957214,
            },
            values: [
              {
                newValue: "Unbranded Soft Chips",
                oldValue: "robust",
              },
            ],
          },
        ],
        dateLastSubmitted: "2019-08-23T21:01:28.865Z",
        dateSent: "2019-09-28T00:04:27.367Z",
        dateSubmitted: "2019-06-22T12:14:10.056Z",
        debtId: 15366,
        history: [
          {
            dateSent: "2019-09-19T03:08:37.464Z",
            dateSubmitted: "2020-01-31T13:29:34.177Z",
            letterId: 0,
          },
        ],
        letterId: 0,
        numberOfTimesSubmitted: 63,
        template: {
          dateLastUsed: "2020-02-27T00:33:00.051Z",
          description: "Corporate Avon leverage",
          name: "Avon",
          numberOfTimesUsed: 93,
          templateId: "d564bacb-f053-4850-a7e3-319f610ded79",
        },
        user: {
          customerId: 28139,
          userId: 100957214,
        },
      },
      {
        auditSummaries: [
          {
            changedAt: "2020-03-30T20:14:04.815Z",
            changes: 8,
            operation: 51,
          },
        ],
        audits: [
          {
            auditDate: "2020-02-29T16:55:58.068Z",
            auditId: 1,
            auditItemId: 0,
            auditOperation: 0,
            auditType: 0,
            user: {
              customerId: 28139,
              userId: 100957214,
            },
            values: [
              {
                newValue: "Unbranded Soft Chips",
                oldValue: "robust",
              },
            ],
          },
        ],
        dateLastSubmitted: "2019-10-01T21:01:28.865Z",
        dateSent: "2019-09-28T00:04:27.367Z",
        dateSubmitted: "2019-06-22T12:14:10.056Z",
        debtId: 15366,
        history: [
          {
            dateSent: "2019-09-19T03:08:37.464Z",
            dateSubmitted: "2020-01-31T13:29:34.177Z",
            letterId: 1,
          },
        ],
        letterId: 1,
        numberOfTimesSubmitted: 63,
        template: {
          dateLastUsed: "2020-02-27T00:33:00.051Z",
          description: "New Company Reminder",
          name: "Avon",
          numberOfTimesUsed: 93,
          templateId: "d564bacb-f053-4850-a7e3-319f610ded79",
        },
        user: {
          customerId: 28139,
          userId: 100957214,
        },
      },
    ],
  };


  const fields = [
    {
      lettersName: get(debt, "letters[0].template.description", []),
      lettersDateLastSubmitted: formatDateL(
        get(debt, "letters[0].dateLastSubmitted", [])
      ),
    },
    {
      lettersName: get(debt, "letters[1].template.description", []),
      lettersDateLastSubmitted: formatDateL(
        get(debt, "letters[1].dateLastSubmitted", [])
      ),
    },
  ];


  const debt1 = get(debt, "letters", []);

  const fields1 = debt1.map(item => {
    return {
      lettersName: item.template.description,
      lettersDateLastSubmitted: item.dateLastSubmitted,
    };
  });

  console.log(fields1);
