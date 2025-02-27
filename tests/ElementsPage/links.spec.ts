import { test } from "../../fixtures/fixtures";

test("Simple link opens correct URL", async ({ links }) => {
  await links.openPageLinks();
  const newPage = await links.clickSimpleLinkAndGetNewTab();
  await links.verifyURL(newPage, links.expectedURL);
});

test("Dynamic link opens correct URL", async ({ links }) => {
  await links.openPageLinks();
  const newPage = await links.clickDynamicLinkAndGetNewTab();
  await links.verifyURL(newPage, links.expectedURL);
});

test('created, 201', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.CreatedURL);
  await links.clickCreatedLink();
  const response = await responsePromise;
  await links.verifycreatedrstatus201(response);
  await links.verifylinkResponseText(links.CreatedResponseText)
})

test('no-content, 204', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.NoContentURL);
  await links.clickNoContentLink();
  const response = await responsePromise;
  await links.verifynocontentStatus204(response);
  await links.verifylinkResponseText(links.NoContentResponseText)
})

test('moved, 301', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.MovedURL);
  await links.clickMovedLink();
  const response = await responsePromise;
  await links.verifymovedStatus301(response);
  await links.verifylinkResponseText(links.MovedResponseText)
})

test('bad-request, 400', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.BadRequestURL);
  await links.clickBadRequestLink();
  const response = await responsePromise;
  await links.verifybadrequestStatus400(response);
  await links.verifylinkResponseText(links.BadRequestResponseText)
})

test('unauthorized, 401', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.UnauthorizedURL);
  await links.clickUnauthorizedLink();
  const response = await responsePromise;
  await links.verifyunauthorizedStatus401(response);
  await links.verifylinkResponseText(links.UnauthorizedResponseText)
})

test('forbidden, 403', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.ForbiddenURL);
  await links.clickForbiddenLink();
  const response = await responsePromise;
  await links.verifyforbiddenStatus403(response);
  await links.verifylinkResponseText(links.ForbiddenResponseText)
})

test('not-found, 404', async ({ links }) => {
  await links.openPageLinks();
  const responsePromise = links.getfulfilledResponse(links.page, links.NotFoundURL);
  await links.clickNotFoundLink();
  const response = await responsePromise;
  await links.verifynotfoundStatus404(response);
  await links.verifylinkResponseText(links.NotFoundResponseText)
})

