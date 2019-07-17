// import { Injectable } from '@angular/core';
// import { DocumentFilterModel } from '../models/document-filter.model';

// @Injectable()
// export class DocumentFilterHelper {
//   constructor() {}

//   public filter(
//     documentList: any[],
//     documentFilter: DocumentFilterModel
//   ): any[] {
//     if (documentFilter.documentType.id) {
//       documentList = documentList.filter(
//         item => item.documentTypeId == documentFilter.documentType.id
//       );
//     }
//     if (documentFilter.documentDateStart) {
//       documentList = documentList.filter(
//         item => item.documentDate > documentFilter.documentDateStart
//       );
//     }
//     if (documentFilter.documentDateEnd) {
//       documentList = documentList.filter(
//         item => item.documentDate < documentFilter.documentDateEnd
//       );
//     }
//     if (documentFilter.dueDateStart) {
//       documentList = documentList.filter(
//         item => item.dueDate > documentFilter.dueDateStart
//       );
//     }
//     if (documentFilter.dueDateEnd) {
//       documentList = documentList.filter(
//         item => item.dueDate < documentFilter.dueDateEnd
//       );
//     }
//     return documentList;
//   }
// }
