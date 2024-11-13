using JCOrderInventory.Core.Domain.DTO.Request;
using JCOrderInventory.Core.Domain.DTO.Response;
using JCOrderInventory.Core.Domain.DTO.ResponseWrapper;
using JCOrderInventory.Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCOrderInventory.Core.Domain.Mappers
{
    public interface IOrderMapperService
    {

        public OrderResponseDTO OrderDomain_To_OrderResponseDTO(OrderDomain order);

        public List<OrderResponseDTO> OrderDomains_To_OrderResponseDTOs(List<OrderDomain> order);

        public OrderDomain OrderRequestDTO_To_OrderDomain(OrderRequestDTO order);

        public List<OrderDomain> OrderRequestDTOs_To_OrderDomains(List<OrderRequestDTO> order);

        public OrderResponseWrapperDTO OrderResponseDTO_To_OrderResponseWrapperDTO(OrderResponseDTO order);

        public List<OrderResponseWrapperDTO> OrderResponseDTOs_To_OrderResponseWrapperDTOs(List<OrderResponseDTO> order);

        public OrderResponseDTO OrderDomain_To_OrderResponseDTO_using_Mapster(OrderDomain order);
        public IList<OrderResponseDTO> OrderDomains_To_OrderResponseDTOs_using_Mapster(IList<OrderDomain> orderList);
        public OrderResponseWrapperDTO OrderResponseDTO_To_OrderResponseWrapperDTO_using_Mapster(OrderResponseDTO order);
        public IList<OrderResponseWrapperDTO> OrderResponseDTOs_To_OrderResponseWrapperDTOs_using_Mapster(IList<OrderResponseDTO> orderList);

    }

}
    
